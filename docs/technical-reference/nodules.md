# Nodule interface

Nodules are modular nodes in a star-topology network attached to the base board.

![An empty nodule, it is hexagonal and has a cutout at one end for mounting](nodules/2679e4a4574b49db5b2899405.png)

Each nodule plugs into the base board using a PCB edge connector that shares a form factor with the popular modular network interface SFP.

Nodules do not have to have an electrical connection at all. They may be any material of 1mm thickness. We encourage people to be creative in their use of materials. 1mm thick cardboard is an excellent material for making decorative nodules

![A 3d printed nodule, which contains a bubble spirit level](nodules/2679e4a4574b49db5b2899402.PNG)

Electronic nodules will be provided with the following facilities:

* 3.3V supply at up to 600mA
* 9 gpio pins - 4 connected directly to the main MCU, 5 connected to an i/o expander
* 1 nodule detection pin - when this pin is connected to GND, it will request power from the baseboard, which, unless inhibited by software, will enable the 3.3V supply
* 2 pins for an i2c interface. The nodule may, but doesn't have to, provide an i2c-attached eeprom from a list of known parts. This eeprom can be a nodule identification/description, but it may also contain code, that the user of the badge will be able to run if they choose once the nodule has been inserted
* lots of gnd pins

Nodules have a default hexagonal size and shape, but may extend outside the specified shape within documented constraints

There will be mechanical mounting posts for nodules to attach to the baseboard with 2mm screws. This is only necessary if the nodules are expected to experience mechanical load
