const MOVE_DISTANCE = 20;

function Pet(name, weight, xPosition, yPosition, faceImg, width, height) {
    this.name = name;
    this.weight = weight;
    this.xPosition = xPosition;
    this.yPosition = yPosition;
    this.faceImg = faceImg;
    this.width = width;
    this.height = height;
    // this.getName = function () {
    //     return this.getName();
    // };
    // this.setName = function (name) {
    //     this.name = name;
    // };
    // this.getWeight = function () {
    //     return this.weight;
    // };
    // this.setWeight = function (weight) {
    //     this.weight = weight;
    // };
    this.moveLeft = function () {
        this.xPosition -= MOVE_DISTANCE;
    };
    this.moveRight = function () {
        this.xPosition += MOVE_DISTANCE;
    };
    this.moveUp = function () {
        this.yPosition -= MOVE_DISTANCE;
    };
    this.moveDown = function () {
        this.yPosition += MOVE_DISTANCE;
    };
    this.draw = function (canvas) {
        let img = new Image();
        img.src = this.faceImg;
        console.log(img);

        let context = canvas.getContext('2d');
        context.drawImage(img, this.xPosition, this.yPosition, this.width, this.height);
    };
    this.audioPlay = function (audio) {
        audio.play();
    };
    this.audioPause = function (audio) {
        audio.pause();
    };
    this.isTouch = function (pet) {
        if (this.xPosition + this.width == pet.xPosition || 
            this.yPosition + this.height == pet.yPosition + pet.height) {
            return true;
        }
    }

}