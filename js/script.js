let navLinks = document.querySelectorAll(".nav-links li a");
for (let i = 0; i < navLinks.length; i++) {
    let navLink = navLinks[i].pathname;
    let pathname = window.location.pathname;
    if (navLink == pathname) {
        navLinks[i].classList.add("current");
    } else if (pathname == "/" || pathname == "/new-style/") {
        navLinks[0].classList.add("current");
    };
};

const copyButtons = document.querySelectorAll(".copy-button");
copyButtons.forEach(copyButton => {
    copyButton.addEventListener("click", e => {
        e.preventDefault();

        const codeBlock = copyButton.parentElement.querySelector(".code > pre");
        navigator.clipboard.writeText(codeBlock.textContent);
        console.log(navigator.clipboard.readText());
    });
});

const tabsKeys = document.querySelectorAll(".tabs-key");
const tabsContents = document.querySelectorAll(".tabs-content");
tabsKeys.forEach(tabsKey => {
    tabsKey.addEventListener("click", e => {
        e.preventDefault();

        tabsKeys.forEach(tk => {
            tk.classList.remove("selected");
        });

        tabsContents.forEach(tc => {
            tc.classList.remove("selected");
        });

        tabsKey.classList.add("selected");
        tabsContents.forEach(tc => {
            if (tc.dataset.tab === tabsKey.dataset.tab) {
                tc.classList.add("selected");
            }
        });
    });
});