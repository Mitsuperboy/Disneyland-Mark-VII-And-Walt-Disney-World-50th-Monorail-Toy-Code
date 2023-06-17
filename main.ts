function transmit_stop () {
    for (let index = 0; index < 1; index++) {
        for (let index = 0; index < 240; index++) {
            pins.digitalWritePin(IR, 1)
pins.digitalWritePin(IR3, 1)
pins.digitalWritePin(IR4, 0)
pins.digitalWritePin(IR5, 0)
basic.pause(CarrierFreqInterval)
            pins.digitalWritePin(IR, 0)
pins.digitalWritePin(IR3, 0)
pins.digitalWritePin(IR4, 0)
pins.digitalWritePin(IR5, 0)
basic.pause(CarrierFreqInterval)
        }
        basic.pause(500)
        for (let index = 0; index < 60; index++) {
            pins.digitalWritePin(IR, 1)
pins.digitalWritePin(IR3, 1)
pins.digitalWritePin(IR4, 0)
pins.digitalWritePin(IR5, 0)
basic.pause(CarrierFreqInterval)
            pins.digitalWritePin(IR, 0)
pins.digitalWritePin(IR3, 0)
pins.digitalWritePin(IR4, 0)
pins.digitalWritePin(IR5, 0)
basic.pause(CarrierFreqInterval)
        }
        basic.pause(500)
        for (let index = 0; index < 60; index++) {
            pins.digitalWritePin(IR, 1)
pins.digitalWritePin(IR3, 1)
pins.digitalWritePin(IR4, 0)
pins.digitalWritePin(IR5, 0)
basic.pause(CarrierFreqInterval)
            pins.digitalWritePin(IR, 0)
pins.digitalWritePin(IR3, 0)
pins.digitalWritePin(IR4, 0)
pins.digitalWritePin(IR5, 0)
basic.pause(CarrierFreqInterval)
        }
        basic.pause(500)
        for (let index = 0; index < 20; index++) {
            pins.digitalWritePin(IR, 1)
pins.digitalWritePin(IR3, 1)
pins.digitalWritePin(IR4, 0)
pins.digitalWritePin(IR5, 0)
basic.pause(CarrierFreqInterval)
            pins.digitalWritePin(IR, 0)
pins.digitalWritePin(IR3, 0)
pins.digitalWritePin(IR4, 0)
pins.digitalWritePin(IR5, 0)
basic.pause(CarrierFreqInterval)
        }
        basic.pause(1500)
        for (let index = 0; index < 20; index++) {
            pins.digitalWritePin(IR, 1)
pins.digitalWritePin(IR3, 1)
pins.digitalWritePin(IR4, 0)
pins.digitalWritePin(IR5, 0)
basic.pause(CarrierFreqInterval)
            pins.digitalWritePin(IR, 0)
pins.digitalWritePin(IR3, 0)
pins.digitalWritePin(IR4, 0)
pins.digitalWritePin(IR5, 0)
basic.pause(CarrierFreqInterval)
        }
        basic.pause(1000)
    }
}
function transmit_rev () {
    for (let index = 0; index < 1; index++) {
        for (let index = 0; index < 240; index++) {
            pins.digitalWritePin(IR, 1)
pins.digitalWritePin(IR3, 1)
pins.digitalWritePin(IR4, 1)
pins.digitalWritePin(IR5, 0)
basic.pause(CarrierFreqInterval)
            pins.digitalWritePin(IR, 0)
pins.digitalWritePin(IR3, 0)
pins.digitalWritePin(IR4, 0)
pins.digitalWritePin(IR5, 0)
basic.pause(CarrierFreqInterval)
        }
        basic.pause(500)
        for (let index = 0; index < 60; index++) {
            pins.digitalWritePin(IR, 1)
pins.digitalWritePin(IR3, 1)
pins.digitalWritePin(IR4, 1)
pins.digitalWritePin(IR5, 0)
basic.pause(CarrierFreqInterval)
            pins.digitalWritePin(IR, 0)
pins.digitalWritePin(IR3, 0)
pins.digitalWritePin(IR4, 0)
pins.digitalWritePin(IR5, 0)
basic.pause(CarrierFreqInterval)
        }
        basic.pause(500)
        for (let index = 0; index < 60; index++) {
            pins.digitalWritePin(IR, 1)
pins.digitalWritePin(IR3, 1)
pins.digitalWritePin(IR4, 1)
pins.digitalWritePin(IR5, 0)
basic.pause(CarrierFreqInterval)
            pins.digitalWritePin(IR, 0)
pins.digitalWritePin(IR3, 0)
pins.digitalWritePin(IR4, 0)
pins.digitalWritePin(IR5, 0)
basic.pause(CarrierFreqInterval)
        }
        basic.pause(500)
        for (let index = 0; index < 20; index++) {
            pins.digitalWritePin(IR, 1)
pins.digitalWritePin(IR3, 1)
pins.digitalWritePin(IR4, 1)
pins.digitalWritePin(IR5, 0)
basic.pause(CarrierFreqInterval)
            pins.digitalWritePin(IR, 0)
pins.digitalWritePin(IR3, 0)
pins.digitalWritePin(IR4, 0)
pins.digitalWritePin(IR5, 0)
basic.pause(CarrierFreqInterval)
        }
        basic.pause(1500)
        for (let index = 0; index < 20; index++) {
            pins.digitalWritePin(IR, 1)
pins.digitalWritePin(IR3, 1)
pins.digitalWritePin(IR4, 1)
pins.digitalWritePin(IR5, 0)
basic.pause(CarrierFreqInterval)
            pins.digitalWritePin(IR, 0)
pins.digitalWritePin(IR3, 0)
pins.digitalWritePin(IR4, 0)
pins.digitalWritePin(IR5, 0)
basic.pause(CarrierFreqInterval)
        }
        basic.pause(1000)
    }
}
input.onButtonPressed(Button.A, function () {
    transmit_fwd()
})
input.onButtonPressed(Button.AB, function () {
    transmit_stop()
})
input.onButtonPressed(Button.B, function () {
    transmit_rev()
})
function transmit_fwd () {
    for (let index = 0; index < 1; index++) {
        for (let index = 0; index < 240; index++) {
            pins.digitalWritePin(IR, 1)
pins.digitalWritePin(IR3, 1)
pins.digitalWritePin(IR4, 1)
pins.digitalWritePin(IR5, 1)
basic.pause(CarrierFreqInterval)
            pins.digitalWritePin(IR, 0)
pins.digitalWritePin(IR3, 0)
pins.digitalWritePin(IR4, 0)
pins.digitalWritePin(IR5, 0)
basic.pause(CarrierFreqInterval)
        }
        basic.pause(500)
        for (let index = 0; index < 60; index++) {
            pins.digitalWritePin(IR3, 1)
pins.digitalWritePin(IR4, 1)
pins.digitalWritePin(IR5, 1)
basic.pause(CarrierFreqInterval)
            pins.digitalWritePin(IR3, 0)
pins.digitalWritePin(IR4, 0)
pins.digitalWritePin(IR5, 0)
basic.pause(CarrierFreqInterval)
        }
        basic.pause(500)
        for (let index = 0; index < 60; index++) {
            pins.digitalWritePin(IR3, 1)
pins.digitalWritePin(IR4, 1)
pins.digitalWritePin(IR5, 1)
basic.pause(CarrierFreqInterval)
            pins.digitalWritePin(IR3, 0)
pins.digitalWritePin(IR4, 0)
pins.digitalWritePin(IR5, 0)
basic.pause(CarrierFreqInterval)
        }
        basic.pause(500)
        for (let index = 0; index < 20; index++) {
            pins.digitalWritePin(IR3, 1)
pins.digitalWritePin(IR4, 1)
pins.digitalWritePin(IR5, 1)
basic.pause(CarrierFreqInterval)
            pins.digitalWritePin(IR3, 0)
pins.digitalWritePin(IR4, 0)
pins.digitalWritePin(IR5, 0)
basic.pause(CarrierFreqInterval)
        }
        basic.pause(1500)
        for (let index = 0; index < 20; index++) {
            pins.digitalWritePin(IR3, 1)
pins.digitalWritePin(IR4, 1)
pins.digitalWritePin(IR5, 1)
basic.pause(CarrierFreqInterval)
            pins.digitalWritePin(IR3, 0)
pins.digitalWritePin(IR4, 0)
pins.digitalWritePin(IR5, 0)
basic.pause(CarrierFreqInterval)
        }
        basic.pause(1000)
    }
}
let CarrierFreqInterval = 0
let IR = DigitalPin.P2
let IR3 = DigitalPin.P3
let IR4 = DigitalPin.P4
let IR5 = DigitalPin.P5
let IR6 = DigitalPin.P6
CarrierFreqInterval = 13
