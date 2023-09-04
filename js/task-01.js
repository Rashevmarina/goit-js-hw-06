const ollCategoriesEl = categories => {
	const elementItems = document.querySelectorAll(categories);
	console.log(`Number of categories: ${elementItems.length}`);
    elementItems.forEach(item => {
        console.log(`Category: ${item.firstElementChild.textContent}`),
        console.log(`Number of elements: ${item.lastElementChild.children.length}`)
    }
	);
};
ollCategoriesEl('.item');