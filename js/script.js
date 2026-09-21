
    /* =========================================
       MOBILE MENU
    ========================================= */

    const menuButton =
        document.getElementById("menuButton");

    const navMenu =
        document.getElementById("navMenu");


    menuButton.addEventListener(
        "click",
        function () {

            navMenu.classList.toggle("show");

        }
    );


    /* CLOSE MOBILE MENU */

    const navLinks =
        document.querySelectorAll(
            ".nav-menu a"
        );


    navLinks.forEach(
        function (link) {

            link.addEventListener(
                "click",
                function () {

                    navMenu.classList.remove(
                        "show"
                    );

                }
            );

        }
    );



    /* =========================================
       CONTACT FORM
    ========================================= */

    const contactForm =
        document.getElementById(
            "contactForm"
        );

    const formMessage =
        document.getElementById(
            "formMessage"
        );

    const submitButton =
        contactForm.querySelector(
            'button[type="submit"]'
        );

    contactForm.addEventListener(
        "submit",
        async function (event) {

            /*
             * Stop the browser from redirecting to FormSubmit.
             */
            event.preventDefault();

            const originalText =
                submitButton.innerHTML;

            submitButton.disabled = true;
            submitButton.innerHTML = "Sending...";

            formMessage.innerHTML = "";
            formMessage.style.color = "#0b4ea2";

            try {

                const formData =
                    new FormData(contactForm);

                const response =
                    await fetch(
                        contactForm.action,
                        {
                            method: "POST",
                            headers: {
                                "Accept":
                                    "application/json"
                            },
                            body: formData
                        }
                    );

                const data =
                    await response.json();

                if (
                    !response.ok ||
                    data.success === false
                ) {
                    throw new Error(
                        data.message ||
                        "Unable to send enquiry."
                    );
                }

                formMessage.innerHTML =
                    "✓ Thank you! Your enquiry has been sent successfully.";

                formMessage.style.color =
                    "#16803c";

                contactForm.reset();

            } catch (error) {

                console.error(
                    "Email submission error:",
                    error
                );

                formMessage.innerHTML =
                    "✕ Sorry, your enquiry could not be sent. Please try again or contact us by WhatsApp.";

                formMessage.style.color =
                    "#c62828";

            } finally {

                submitButton.disabled = false;
                submitButton.innerHTML =
                    originalText;

            }

        }
    );



    /* =========================================
       ACTIVE NAVIGATION
    ========================================= */

    const sections =
        document.querySelectorAll(
            "section[id]"
        );


    const links =
        document.querySelectorAll(
            ".nav-menu > a"
        );


    window.addEventListener(
        "scroll",
        function () {

            let current = "";


            sections.forEach(
                function (section) {

                    const sectionTop =
                        section.offsetTop - 130;


                    if (
                        window.scrollY >=
                        sectionTop
                    ) {

                        current =
                            section.getAttribute(
                                "id"
                            );

                    }

                }
            );


            links.forEach(
                function (link) {

                    link.classList.remove(
                        "active"
                    );


                    if (
                        link.getAttribute(
                            "href"
                        ) === "#" + current
                    ) {

                        link.classList.add(
                            "active"
                        );

                    }

                }
            );

        }
    );



    /* =========================================
       SCROLL ANIMATION
    ========================================= */

    const revealElements =
        document.querySelectorAll(
            ".product-card, .industry-card, .benefit, .why-item"
        );


    const observer =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(
                    function (entry) {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.style.opacity =
                                "1";

                            entry.target.style.transform =
                                "translateY(0)";

                        }

                    }
                );

            },
            {
                threshold: 0.15
            }
        );


    revealElements.forEach(
        function (element) {

            element.style.opacity =
                "0";

            element.style.transform =
                "translateY(25px)";

            element.style.transition =
                "all .6s ease";

            observer.observe(
                element
            );

        }
    );



    /* =========================================
       SCROLL TO TOP BUTTON
    ========================================= */

    const topButton =
        document.getElementById(
            "topButton"
        );


    window.addEventListener(
        "scroll",
        function () {

            if (
                window.scrollY > 500
            ) {

                topButton.style.display =
                    "block";

            } else {

                topButton.style.display =
                    "none";

            }

        }
    );


    topButton.addEventListener(
        "click",
        function () {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );



