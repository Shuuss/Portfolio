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

const inputs = document.querySelectorAll(".input");

function focusFunc(){
	let parent = this.parentNode;
	parent.classList.add("focus")
}

function blurFunc(){
	let parent = this.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}

inputs.forEach((input)=>{
	input.addEventListener("focus",focusFunc);
	input.addEventListener("blur",blurFunc);
})

function sendMail() {
	let parms ={
		username : document.getElementById("username").value,
		email : document.getElementById("email").value,
		phone : document.getElementById("phone").value,
		message : document.getElementById("message").value
	}

	emailjs.send("service_564m92q","template_vjttn9b",parms).then(alert("Email Sent!!"))
}


const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
    let scrollY = window.pageYOffset; // Position actuelle du scroll

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50; // Ajustement pour activer avant d'atteindre complètement le haut
        const sectionId = current.getAttribute("id");

        // Vérifie si la section est visible dans la fenêtre de scroll
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            const link = document.querySelector('.nav__menu a[href*="' + sectionId + '"]');
            if (link) {
                link.classList.add("active-link");
            }
        } else {
            const link = document.querySelector('.nav__menu a[href*="' + sectionId + '"]');
            if (link) {
                link.classList.remove("active-link");
            }
        }
    });
}
