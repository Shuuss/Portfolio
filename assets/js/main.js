const tabs = document.querySelectorAll('[data-target]'),
		tabContent = document.querySelectorAll('[data-content]');

		tabs.forEach(tab => {
			tab.addEventListener("click", () => {
				const target = document.querySelector(tab.dataset.target)

				tabContent.forEach(tabContents => {
					tabContents.classList.remove('skills__active')
				})

				target.classList.add('skills__active')

				tabs.forEach(tab => {
					tab.classList.remove('skills__active')
				})

				tab.classList.add('skills__active')
			})
		})

		document.addEventListener("click",(e) => {
			if(e.target.classList.contains("work__button")){
				togglePortfolioPopup();
				portfolioItemsDetails(e.target.parentElement);
			}
		})

		function togglePortfolioPopup(){
			document.querySelector(".portfolio__popup").classList.toggle("open");
		}

		document.querySelector(".portfolio__popup-close").addEventListener("click",togglePortfolioPopup);


		function portfolioItemsDetails(portfolioItem){
			document.querySelector(".pp__thumbnail img").src = portfolioItem.querySelector(".work__img").src;
			document.querySelector(".portfolio__popup-subtitle span").innerHTML = portfolioItem.querySelector(".work__title").innerHTML;
			document.querySelector(".portfolio__popup-body").innerHTML = portfolioItem.querySelector(".portfolio__item-details").innerHTML;

		}

		var mixerPortfolio = mixitup('.work__container', {
    controls: {
        toggleDefault: 'none'
    },
    selectors :{
    	target: '.work__card'
    },
    animation :{
    	duration: 300
    }
});


const linkWork = document.querySelectorAll('.work__item')

function activeWork(){
	linkWork.forEach(l=> l.classList.remove('active-work'))
	this.classList.add('active-work')
}

linkWork.forEach(l=> l.addEventListener("click", activeWork))