class Wagon {
    constructor(capacity) {
        this.passengers = []
        this.capacity = capacity
    }
    getAvailableSeatCount() {
        return this.capacity - this.passengers.length
    }
    join(Traveler) {
        if (this.getAvailableSeatCount() >= 1) {
            this.passengers.push(Traveler)
        }
    }
    shouldQuarantine() {
        const sicky = this.passengers.some(passenger => passenger.isHealthy === false)
        return sicky
        // for (let index = 0; index < this.passengers.length; index += 1) {
        //     if (this.passengers[index].isHealthy === false)
        //         return true
        // }
    }
    totalFood() {
        let total = 0
        for (let index= 0; index < this.passengers.length; index += 1) {
            total += this.passengers[index].food 
        }
        return total
    }
}
