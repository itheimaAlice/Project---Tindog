class Dog {
    constructor(data) {
        Object.assign(this, data)
    }
    
    getBadgeHtml(swipe, like) {
        return (!like && swipe) ? `<img src="images/badge-nope.png" class="badge" id="badge-nope">` 
        :  like ? `<img src="images/badge-like.png" class="badge" id="badge-like">` 
        :  ""
    }
    
    getDogHtml() {
        const {name, avatar, age, bio} = this 
        const badgeHtml = this.getBadgeHtml(this.hasBeenSwiped, this.hasBeenLiked)
        return `
            <div class="main">
                <img src="${avatar}" class="dog-img" />
                <div class="dog-detail">
                    <h3>${name}, ${age}</h3>
                    <p>${bio}</p>
                </div>  
                ${badgeHtml}
            </div>
        `
    }
}

export default Dog
