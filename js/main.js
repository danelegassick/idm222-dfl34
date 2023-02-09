/**
 * Scroll Indicator Progress Bar
 */
 const handleScrollIndicator = () => {
	const scrollIndicator = document.querySelector("#scroll-indicator");
	const maxHeight = document.body.scrollHeight - window.innerHeight;

	const widthPercentage = (window.scrollY / maxHeight) * 100;
	scrollIndicator.style.width = `${widthPercentage}%`;
};

window.addEventListener("scroll", handleScrollIndicator);

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
			null
        }
    });
});


const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));