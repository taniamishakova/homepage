{
    const onChangeBackgroundClick = () => {
        const body = document.querySelector(".body");

        body.classList.toggle("whiteBackgroundChange");

    };

    const onHideBackgroundClick = () => {
        const header = document.querySelector(".js-header");
        const hideButton = document.querySelector(".js-hideButton");

        header.classList.toggle("hiddenHeader");
        if (header.classList.contains("hiddenHeader")) {
            hideButton.innerText = "Pokaż nagłówek";
        } else { hideButton.innerText = "Usuń nagłówek"; }
    };

    const init = () => {
        const changeBackground = document.querySelector(".js-changeBackground");
        const hideButton = document.querySelector(".js-hideButton");

        changeBackground.addEventListener("click", onChangeBackgroundClick);

        hideButton.addEventListener("click", onHideBackgroundClick);
    };
    init();
}