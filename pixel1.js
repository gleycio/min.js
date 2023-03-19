!(function (f, b, e, v, n, t, s) {
    if (window.fbq) return;
    n = window.fbq = function () {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
    };
    if (!window._fbq) window._fbq = n;
    n.push = n;
    n.loaded = !0;
    n.version = "2.0";
    n.queue = [];

    scriptEl = document.createElement("script");
    scriptEl.async = !0;
    scriptEl.src = "https://connect.facebook.net/en_US/fbevents.js";
    
    s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(scriptEl, s);

})(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");
