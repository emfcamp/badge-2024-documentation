---
title: Capabilities Overview
---

Capabilities are a way for apps and hexpansions to offer functionality to other
apps and hexpansions on the Tildagon. If you are an hexpansion creator, and you
want app authors to be able to interface with your hexpansion, you can have
your hexpansion _provide_ a Capability. If you are an app author and you want
to use a hardware feature, you can specify that your app either _requires_ or
_supports_ a Capability. Apps can also provide Capabilities.

To see a list of some available capabilities, check out our Capability Registry

## What is a Capability?

Concretely, a Capability is a specification document. Hexpansion creators or
app authors who have implemented an hexpansion or an app that expects other
apps to interact with it write a brief document explaining how other developers
should interact with their app. The "Capability creator" will publish the
document online. The Tildagon documentation is a great place to publish
Capabilities, but they can be published on any website.

The URL of a Capability becomes it's identifier. The identifier is used in apps
and hexpansion apps to specify that the app _provides_, _requires_, or
_supports_ a Capability.

| Name       | Description                                                                                                                               |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| _provides_ | Your hexpansion or app provides or implements the Capability such that apps that require or support the Capability will be able to use it |
| _requires_ | Your app expects that a given Capability exists on the tildagon, and will not function without it                                         |
| _supports_ | Your app is enhanced if given Capability exists on the tildagon, but it is not required                                                   |

Once the Capability is specified in a document and published, hexpansions and
apps can declare in their tildagon.toml (and tildagon.json) files that they
provide, require, or support your Capability.

## How can an app or an hexpansion declare that they _provide_ a Capability?

Capabilities are declared as provided in your app or hexpansion tildagon.toml
or tildagon.json file.

```toml
[[metadata.providedCapabilities]]
type = "ProvidedCapability"
capability = { type = "Capability", identifier = "https://tildagon.badge.emfcamp.org/capabilities/registry/mysterious-pings" }
```

```json
{
  "metadata": {
    "providedCapabilities": [
      {
        "type": "ProvidedCapability",
        "identifier": "https://tildagon.badge.emfcamp.org/capabilities/registry/mysterious-pings"
      }
    ]
  }
}
```

Heads up! The Tildagon OS does not contain a toml parser, so for
firmware/hexpansion apps, you will need to provide a tildagon.json file.

Conversely, the App Store does _not_ yet support tildagon.json, so until
[this issue is
resolved](https://github.com/emfcamp/badge-2024-app-store/issues/169), you must
use tildagon.toml. Sorry about this, I'm working on it.

The badge software will keep track of all the provided Capabilities on the
badge, make them available for apps to query, and use them to provide suggested
apps in the app store.

Apps can specify that they support Capabilities using the following data in
their tildagon.toml files

```toml
[[metadata.capabilities]]
required = true
feature = { type = "Capability", identifier = "https://tildagon.badge.emfcamp.org/capabilities/mysterious-pings" }
```

Declaring support or requirement of multiple Capabilities works in toml as follows:

```toml
[[metadata.capabilities]]
required = true
feature = { type = "Capability", identifier = "https://tildagon.badge.emfcamp.org/capabilities/mysterious-pings" }

[[metadata.capabilities]]
required = true
feature = { type = "Capability", identifier = "https://tildagon.badge.emfcamp.org/capabilities/badger-detector" }
```

### Hexpansions where EEPROM space is at a premium

Adding this file will take up at least 2 filesystem blocks on your EEPROM, which could be significant if you're low on bytes. There is a compact representation of capabilities that you can use on hexpansions only to reduce this. That is:

```python
class GPSApp(app.App):

    CAP = ["@nmea/", "@position/"]
```

In this notation, the `CAP` attribute lists the identifiers that are provided by this hexpansion. The string `@` is replaced with `https://tildagon.badge.emfcamp.org/capabilities/`, to allow lower filesizes when implementing common capabilities.

## How can my app see which Capabilities are provided on the current running badge?

You can check which running apps implement a capability with the `get_running_apps_by_capability` method:

```python
from system.capabilities.utils import get_running_apps_by_capability

neopixel_apps = get_running_apps_by_capability(
  "https://tildagon.badge.emfcamp.org/capabilities/registry/neopixels/"
)
```

This will only include running apps. We will add the ability to trigger launching an app that offers capabilities but is not yet running at a later date.


## What should my Capability look like?

The minimum requirement from a Capability specification is that the reader
understands how to implement an app that requires a capability. As we know,
good documentation is extremely important, and will likely have a strong effect
on the adoption of your capability.

The [Tildagon Event Bus] is a great way to interface between a Capability
Provider and a Capability Consumer. It allows for bidirectional communication
in that:

1. The Capability Provider can autonomously emit messages for the Capability
   Consumer to listen for.
2. The Capability Consumer can emit messages for the Capability Provider to
   listen to.
3. The Capability Consumer can emit a message and expect a Capability Provider
   to respond with an answer, or vice versa.

Rich interactions can therefore be defined. For more information on the
Tildagon Event Bus, check out our [reference documentation][Tildagon Event Bus].

Capabilities are not restricted to using the event bus - they can specify that
devices are available on a given [I2C
Bus](https://tildagon.badge.emfcamp.org/tildagon-apps/reference/badge-hardware/#i2c),
and even that specific MicroPython code can be imported from a given path.

!!! note "Work in Progress"

    Badge Team is working hard to get hardware and software ready for EMF 2026.
    We will document cross-app MicroPython imports as soon as possible.

## Can apps declare a requirement for a specific hexpansion by it's VID/PID pair?

Yes. Apps can specify that they require a specific hexpansion by adding the
following to their tildagon.toml file:

```toml
[[metadata.capabilities]]
required = false
feature = {
  vid = "0x7CAB",
  pid = "0xBEAC",
  name = "The name of the hexpansion",
  creator = "The creator of the hexpansion",
  url = "https://example.com"
}
```

The `required` value specifies whether the feature is required or supported

!!! note "What is a feature in contrast to a Capability?"

    Apps can require, support or provide Capabilities, but they can also
    require or support a specific hexpansion by its VID and PID, a Frontboard, or a
    Tildagon OS version. "Feature" is the term we use to include these additional
    things apps can require that are not Capabilities.

## Can apps declare a requirement or support for a particular frontboard?

Yes:

```toml
[[metadata.capabilities]]
required = true
feature = { type = "2026 Frontboard" }
```

```toml
[[metadata.capabilities]]
required = true
feature = { type = "2024 Frontboard" }
```

## Should Capabilities be specific or generic?

We encourage collaboration between participants in the Tildagon ecosystem to
collaborate on capabilities that are generic and support functionality across
hardware. If multiple hexpansions implement the same Capabilities, then apps
can support a wider variety of hardware and hexpansion sets.

That said, we do not force you to implement a Capability. As an hexpansion
creator (or app author) you can choose to implement an existing capability,
fork it, create your own from scratch, or not implement one at all.

## Is there a mechanism for consolidating similar Capabilities?

Yes: talking to each other, working together, and collaboratively building
something that serves everyone.

## Do I have to implement an app or build a hexpansion to create a Capability?

No. It might help, but you can just create a Capability and define something
you wish existed. Maybe someone will get nerd-sniped into building it.

The existence of a Capability does not imply or guarantee the existence of an
implementation of a Provider or a Consumer of said Capability.

## Are Capabilities managed and defined by EMF Team Badge?

No. While Team Badge might create some Capabilities, and collaborate on them
with the community, they are not in charge of all the capabilities.

## Are silly capabilities allowed?

Silly capabilities are not only allowed, they are _strongly_ encouraged.

[Tildagon Event Bus]: https://tildagon.badge.emfcamp.org/tildagon-apps/reference/eventbus/
