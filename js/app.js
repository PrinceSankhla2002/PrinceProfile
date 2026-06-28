document.addEventListener("DOMContentLoaded", () =>
{
    document.getElementById("navbar").innerHTML = `
    <nav>

        <div class="logo">
            Prince
        </div>

        <div class="menu">

            <a href="#home">Home</a>

            <a href="#about">About</a>

            <a href="#skills">Skills</a>

            <a href="#projects">Projects</a>

            <a href="#contact">Contact</a>

        </div>

    </nav>
    `;

    document.getElementById("home").innerHTML = `
        <h1>Coming Soon...</h1>
    `;

    document.getElementById("about").innerHTML = `
        <h1>About</h1>
    `;

    document.getElementById("skills").innerHTML = `
        <h1>Skills</h1>
    `;

    document.getElementById("projects").innerHTML = `
        <h1>Projects</h1>
    `;

    document.getElementById("contact").innerHTML = `
        <h1>Contact</h1>
    `;
});
// ---------------------------------------------




//============================================
// CONTACT FORM
//============================================

const form = document.getElementById("contactForm");
const button = document.getElementById("sendBtn");
const popup = document.getElementById("popup");

form.addEventListener("submit", async function (e)
{
    e.preventDefault();

    button.classList.add("loading");
    button.disabled = true;

    const formData = new FormData(form);

    //============================================
    // Dynamic Email Subject
    //============================================

    const userName = form.name.value.trim();

    const company =
        form.company.value.trim() || "Personal";

    formData.set(
        "subject",
        `[Prince Sankhla Port. Form] ${company} - ${userName}`
    );

    try
    {
        const response = await fetch(
            "https://api.web3forms.com/submit",
            {
                method: "POST",
                body: formData
            }
        );

        const result = await response.json();

        if (result.success)
        {
            popup.classList.add("show");

            form.reset();
        }
        else
        {
            alert(result.message || "Failed to send message.");
        }
    }
    catch (error)
    {
        alert("Unable to connect.\nPlease try again.");
    }

    button.classList.remove("loading");
    button.disabled = false;
});

//============================================
// CLOSE POPUP
//============================================

function closePopup()
{
    popup.classList.remove("show");
}