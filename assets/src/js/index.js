function lazyLoad() {
	/** First we get all the non-loaded image elements **/
	var lazyImages = [].slice.call(document.querySelectorAll(".lazy-loaded-image.lazy"));
	/** Then we set up a intersection observer watching over those images and whenever any of those becomes visible on the view then replace the placeholder image with actual one, remove the non-loaded class and then unobserve for that element **/
	let lazyImageObserver = new IntersectionObserver(function (entries, observer) {
		entries.forEach(function (entry) {
			if (entry.isIntersecting) {
				let lazyImage = entry.target;
				lazyImage.src = lazyImage.dataset.src;
				lazyImage.classList.remove("lazy");
				lazyImageObserver.unobserve(lazyImage);
			}
		});
	});
	/** Now observe all the non-loaded images using the observer we have setup above **/
	lazyImages.forEach(function (lazyImage) {
		lazyImageObserver.observe(lazyImage);
	});
}
lazyLoad();
