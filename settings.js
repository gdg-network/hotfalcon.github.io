let allowAnalytics = document.getElementById("allowAnalytics");

if (window.localStorage) {
    let storage = window.localStorage;
    
    if (!!allowAnalytics) {
        let alreadyAllowedAnalytics = storage.getItem("allowAnalytics");

        if (alreadyAllowedAnalytics === null) {
            storage.setItem("allowAnalytics", true);
            allowAnalytics.checked = true;
        } else {
            allowAnalytics.checked = (!!allowAnalytics);
        }

        allowAnalytics.addEventListener("change", (event) => {
            storage.setItem("allowAnalytics", event.currentTarget.checked);
        });
    }
}