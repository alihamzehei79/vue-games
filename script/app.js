new Vue({
    el: '#app',
    data: {
        my: 100,
        you: 100,
        player: false,
        logGamse : []
    },
    methods: {
        handler() {
            this.player = true
        },
        attack() {

            let y = Math.floor(Math.random() * 10);
            let m = Math.floor(Math.random() * 12);
            this.log({my : m , you : y})
            if (this.my <= 0) {
                this.my -= m;
                this.you -= y;
            }
            if (!(this.you <= 0)) {
                this.my -= m;
                this.you -= y;
            }
            if (this.my <= 0) {
                if (confirm(' دوست عزیز باختی ایا میخوای بازی جدیدی شروع کنی؟')) {
                    this.my = 100;
                    this.you = 100;
                    this.player = false;
                    this.logGamse = []
                }
            }
            if (this.you <= 0) {
                if (confirm(' تبریک دوست عزیز شما برنده شدید!!! ایا میخوای بازی جدیدی شروع کنی؟')) {
                    this.my = 100;
                    this.you = 100;
                    this.player = false;
                    this.logGamse = []
                }
            }
        },
        komak() {
            if (this.my < 99) {
                this.my += 5
            }

        },
        end() {
            this.my = 100;
            this.you = 100;
            this.player = false;
            this.logGamse = []
        },
        attackP() {
            let y = Math.floor(Math.random() * 15);
            let m = Math.floor(Math.random() * 10);
            this.log({my : m , you : y})

            if (this.my <= 0) {
                this.my -= m;
                this.you -= y;
            }
            if (!(this.you <= 0)) {
                this.my -= m;
                this.you -= y;
            }
            if (this.my <= 0) {
                if (confirm(' دوست عزیز باختی ایا میخوای بازی جدیدی شروع کنی؟')) {
                    this.my = 100;
                    this.you = 100;
                    this.player = false;
                    this.logGamse = []
                }
            }
            if (this.you <= 0) {
                if (confirm(' تبریک دوست عزیز شما برنده شدید!!! ایا میخوای بازی جدیدی شروع کنی؟')) {
                    this.my = 100;
                    this.you = 100;
                    this.player = false;
                    this.logGamse = []
                }
            }
        },
        log(value) {
            this.logGamse.unshift(value)
            console.log(this.logGamse);
        }
    },
});