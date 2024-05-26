<form class="wrapper">
    <div class="content-section">
        <div class="service-selection">
            <p class="section-title">Select a service</p>
            <div class="service-options">
                <div class="service-option">
                    <input class="peer hidden" id="radio_1" type="radio" name="radio" checked />
                    <span class="service-option-icon"></span>
                    <label class="service-option-label" for="radio_1">
                        <span class="service-option-title">Corporate Event</span>
                        <span class="service-option-duration">1 Hour</span>
                    </label>
                </div>
                <div class="service-option">
                    <input class="peer hidden" id="radio_2" type="radio" name="radio" />
                    <span class="service-option-icon"></span>
                    <label class="service-option-label" for="radio_2">
                        <span class="service-option-title">Social Event</span>
                        <span class="service-option-duration">1 Hour</span>
                    </label>
                </div>
                <div class="service-option">
                    <input class="peer hidden" id="radio_3" type="radio" name="radio" />
                    <span class="service-option-icon"></span>
                    <label class="service-option-label" for="radio_3">
                        <span class="service-option-title">Cinematic Podcast</span>
                        <span class="service-option-duration">1 Hour</span>
                    </label>
                </div>
            </div>
        </div>

        <div class="date-selection">
            <p class="section-title">Select a date</p>
            <div class="date-input-container">
                <div class="date-input-icon">
                    <svg aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                </div>
                <input datepicker="" datepicker-orientation="bottom" autofocus="autofocus" type="text" class="date-input" placeholder="Select date" />
            </div>
        </div>

        <div class="time-selection">
            <p class="section-title">Select a time</p>
            <div class="time-options">
                <button class="time-option">12:00</button>
                <button class="time-option">14:00</button>
                <button class="time-option time-option-active">09:00</button>
                <button class="time-option">12:00</button>
                <button class="time-option">15:00</button>
                <button class="time-option">12:00</button>
                <button class="time-option">14:00</button>
                <button class="time-option">12:00</button>
            </div>
        </div>

        <button class="book-now-button">Book Now</button>
    </div>
</form>

<style>
    /* General Styles */
    .wrapper {
        width: 100vw;
    }

    /* Content Section */
    .content-section {
        margin-left: auto;
        margin-right: auto;
        display: grid;
        max-width: 1024px;
        padding-left: 1.5rem;
        padding-right: 1.5rem;
        padding-bottom: 5rem;
    }

    /* Service Selection */
    .section-title {
        font-family: serif;
        font-size: 1.25rem;
        font-weight: 700;
        color: rgb(30, 58, 138);
    }

    .service-options {
        margin-top: 1rem;
        display: grid;
        max-width: 48rem;
        grid-gap: 1rem 1rem;
    }

    @media (min-width: 640px) {
        .service-options {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }
    }

    @media (min-width: 768px) {
        .service-options {
            grid-template-columns: repeat(3, minmax(0, 1fr));
        }
    }

    .service-option {
        position: relative;
    }

    .service-option-icon {
        position: absolute;
        right: 1rem;
        top: 50%;
        transform: translateY(-50%);
        box-sizing: border-box;
        display: block;
        height: 0.75rem;
        width: 0.75rem;
        border-radius: 9999px;
        border-width: 8px;
        border-color: rgb(156, 163, 175);
        background-color: white;
    }

    .peer:checked ~ .service-option-icon {
        border-color: rgb(16, 185, 129);
    }

    .service-option-label {
        display: flex;
        height: 100%;
        cursor: pointer;
        flex-direction: column;
        border-radius: 0.5rem;
        padding: 1rem;
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    }

    .peer:checked ~ .service-option-label {
        background-color: rgb(16, 185, 129);
        color: white;
    }

    .service-option-title {
        margin-top: 0.5rem;
        font-weight: 500;
    }

    .service-option-duration {
        font-size: 0.75rem;
        text-transform: uppercase;
    }

    /* Date Selection */
    .date-input-container {
        position: relative;
        margin-top: 1rem;
        width: 14rem;
    }

    .date-input-icon {
        position: absolute;
        inset-inline-start: 0;
        inset-block-start: 0;
        inset-block-end: 0;
        display: flex;
        align-items: center;
        padding-left: 0.75rem;
        pointer-events: none;
    }

    .date-input-icon svg {
        height: 1.25rem;
        width: 1.25rem;
        fill: currentColor;
        color: rgb(156, 163, 175);
    }

    .date-input {
        display: block;
        width: 100%;
        border-radius: 0.5rem;
        border: 1px solid rgb(16, 185, 129);
        background-color: rgb(236, 253, 245);
        padding: 0.625rem 0.625rem 0.625rem 2.5rem;
        color: rgb(6, 95, 70);
        outline-width: 0;
        focus-ring-opacity: 0.3;
        placeholder-color: rgb(6, 95, 70);
    }

    .date-input:focus-visible {
        outline: 2px solid rgb(16, 185, 129);
        outline-offset: 2px;
    }

    @media (min-width: 640px) {
        .date-input {
            font-size: 0.875rem;
        }
    }

    /* Time Selection */
    .time-options {
        margin-top: 1rem;
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        gap: 0.5rem;
        max-width: 48rem;
    }

    .time-option {
        border-radius: 0.5rem;
        background-color: rgb(236, 253, 245);
        padding: 0.5rem 1rem;
        font-weight: 500;
        color: rgb(6, 95, 70);
        transition: transform 0.2s ease-in-out;
    }

    .time-option:active {
        transform: scale(0.95);
    }

    .time-option-active {
        background-color: rgb(16, 185, 129);
        color: white;
    }

    /* Book Now Button */
    .book-now-button {
        margin-top: 2rem;
        width: 14rem;
        border-radius: 9999px;
        border: 8px solid rgb(16, 185, 129);
        background-color: rgb(16, 185, 129);
        padding: 1rem 2.5rem;
        font-size: 1.125rem;
        font-weight: 700;
        color: white;
        transition: transform 0.2s ease-in-out;
    }

    .book-now-button:hover {
        transform: translateY(-0.25rem);
    }
</style>