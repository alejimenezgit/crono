class CronoInterval {
    constructor(count) {
      this.count = 0;
      this.interval = undefined;
    }
    
    start() {
        this.interval = setInterval(() => {
           let hour = Math.floor(this.count / 3600);
           let minute = Math.floor((this.count / 60) % 60);
           let seconds = this.count % 60; 
           console.log(`Hour ${hour} Minute ${minute}, Second ${seconds}`);
           this.count++;
        }, 1000);
    }

    stop(){
        clearInterval(this.interval);
    }

    reset(){
        this.count = 0;
    }
}

// Para empezar
const newCrono = new CronoInterval(0); 
newCrono.start();

// Para parar
newCrono.stop();

// Para resetear
newCrono.reset();