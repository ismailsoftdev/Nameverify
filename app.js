// app.js

// Initialize Facebook JavaScript SDK
window.fbAsyncInit = function () {
    FB.init({
        appId: '1062836581776749',
        xfbml: true,
        version: 'v15.0'
        });
    
        // Check username availability when checkBtn is clicked
        document.getElementById('checkBtn').addEventListener('click', function () {
        let username = document.getElementById('usernameInput').value;
        const resultMessage = document.getElementById('resultMessage');
    
        FB.api(`/${username}`, { fields: 'id' }, function (response) {
            if (response.error) {
            resultMessage.innerHTML = "<p>Username is available</p>";
            } else {
            resultMessage.innerHTML = 'Username is not available';
            }
        });
        });
    };

    (function (d, s, id) {
        var js,
        fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {
        return;
        }
        js = d.createElement(s);
        js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    })(document, 'script', 'facebook-jssdk');
