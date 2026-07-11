---
title: Capability - NMEA
---

Capability Identifier:

```bash
https://tildagon.badge.emfcamp.org/capabilities/registry/nmea/
```

Gives access to NMEA 0183 sentences, detailing GPS fix information.

Note: Do not use this for finding user position in general, use the [position capability](./position.md) instead. This is only for detailed introspection of GPS data.

The `sentences` attribute contains a non-exhaustive list of received NMEA sentences, with the checksums stripped.

## Consumers

Find an implementor of the nmea capability from the currently running apps. This application will have a `sentences` attribute, which contains a list of recently recevied sentences.  You must not modify that list.

```python

class NMEAConsumerApp(App):
    def __init__(self):
        pass

    def update(self, delta):
        position = None
        gps_apps = get_apps_by_capability("https://tildagon.badge.emfcamp.org/capabilities/registry/nmea/")
        
        if not gps_apps:
            return

        # We only need to consider a single GPS receiver
        gps_app = gps_apps[0]
        for sentence in gps_app.sentences:
            fields = sentence.split(",")

            # Ignore the talker id prefix
            sentence_type = fields[0][-3:]

            if sentence_type == "RMC" and fields[2] == "A":
                # Status "A" means the fields below are valid (not "V" = void).
                time_field = fields[1]  # hhmmss(.sss)
                date_field = fields[9]  # ddmmyy

                hour, minute, second = time_field[0:2], time_field[2:4], time_field[4:6]
                day, month, year = date_field[0:2], date_field[2:4], date_field[4:6]

                print("UTC: 20{}-{}-{} {}:{}:{}".format(
                    year, month, day, hour, minute, second
                ))

            elif sentence_type == "GGA" and fields[6] != "0":
                # Fix quality "0" means no fix, so the count would be empty.
                locked_satellites = int(fields[7])
                print("Locked satellites: {}".format(locked_satellites))

            elif sentence_type == "GSV" and fields[2] == "1":
                satellites_in_view = int(fields[3])
                print("Satellites in view: {}".format(satellites_in_view))
```


## Providers

Strip the checksum from received sentences, and place them in a ring-buffer.

```python
class LocationProviderApp:
    def __init__(self):
        self.sentences = []
    
    def update(self, delta):
        l = self.uart.readline()
        if l:
            try:
                line = l.decode().strip()
                self.sentences.append(line.split('*')[0])
                if len(self.sentences) > 40:
                    self.sentences = self.sentences[-40:]
            except:
                pass

```
