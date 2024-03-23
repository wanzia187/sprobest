<!-- App.svelte -->
<script>
    const sections = [
        {
            title: 'Mission',
            content: `
                To provide unparalleled media services that inspire, inform, and empower audiences globally. Through innovative content creation, advanced technology utilization, and unwavering commitment to excellence, we strive to set the standard for media service delivery, enhancing the way people connect, engage, and perceive the world around them.
            `
        },
        {
            title: 'Vision',
            content: `
                Our vision is to be the foremost leader in the media industry, recognized for our relentless pursuit of excellence, integrity, and creativity. We envision a future where our media services transcend boundaries, enriching lives, fostering understanding, and driving positive change on a global scale. By continuously pushing the boundaries of what media can achieve, we aspire to shape the future of communication, entertainment, and information dissemination.
            `
        },
        {
            title: 'Values',
            content: `
                <strong>SPROBEST TEAM VALUES ARE:</strong>
                <ul>
                    <li><strong>Integrity:</strong> We uphold the highest ethical standards in all aspects of our operations. Transparency, honesty, and accountability are fundamental to our relationships with employees, clients, partners, and the communities we serve.</li>
                    <li><strong>Innovation:</strong> We embrace innovation as the cornerstone of our success. We proactively seek new ideas, technologies, and approaches to media delivery, constantly pushing the boundaries to stay ahead in a rapidly evolving industry.</li>
                    <li><strong>Diversity and Inclusion:</strong> We celebrate diversity in all its forms and are committed to fostering an inclusive environment where everyone feels valued, respected, and empowered to contribute their unique perspectives and talents.</li>
                    <li><strong>Collaboration:</strong> We believe in the power of collaboration and teamwork. By fostering a culture of cooperation, communication, and mutual respect, we harness the collective talents of our diverse workforce to achieve our shared goals.</li>
                    <li><strong>Customer Focus:</strong> Our customers are at the heart of everything we do. We are dedicated to understanding their needs, exceeding their expectations, and delivering exceptional value through personalized, customer-centric media solutions.</li>
                    <li><strong>Social Responsibility:</strong> We recognize our responsibility to society and the planet. We are committed to making a positive impact through environmentally sustainable practices, community engagement, and support for social causes that align with our values.</li>
                    <li><strong>Continuous Learning:</strong> We embrace a culture of lifelong learning and personal development. We encourage curiosity, experimentation, and ongoing education to adapt to change, seize new opportunities, and stay at the forefront of the media industry.</li>
                </ul>
            `
        }
    ];
</script>

<div class="container">
    {#each sections as { title, content }}
        <div class="section">
            <h1>{title}</h1>
            <div class="content">
                <div class="text">
                    {@html content}
                </div>
            </div>
        </div>
    {/each}
</div>


<style>
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        text-align: center;
        padding: 20px;
    }

    .section {
        max-width: 600px;
        margin-bottom: 30px;
        display: flex;
        justify-content: space-between; 
        align-items: flex-start; 
    }

    .section h1 {
        font-size: 28px;
        color: #333;
        text-align: right; 
        margin-bottom: 0; 
    }

    .section p {
        font-size: 16px;
        line-height: 1.6;
        color: #666;
    }

    .section .content {
        flex: 1; 
    }

    .section .text {
        padding: 20px;
        background-color: #f9f9f9;
        border-radius: 10px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .section h1 {
        font-weight: bold;
        margin-bottom: 10px;
        font-family: 'Arial', sans-serif;
    }

    .section .text {
        border: 2px solid #ccc;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease;
    }

    .section .text:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 12px rgba(0, 0, 0, 0.1);
    }

    .section ul {
        list-style-type: none;
        padding-left: 0;
    }

    .section ul li {
        margin-bottom: 10px;
    }
</style>

<!-- <div class="container">
    <div class="section">
        <h1>Mission</h1>
        <div class="content">
            <div class="text">
                <p>
                    To provide unparalleled media services that inspire, inform, and empower audiences globally. Through innovative content creation, advanced technology utilization, and unwavering commitment to excellence, we strive to set the standard for media service delivery, enhancing the way people connect, engage, and perceive the world around them.
                </p>
            </div>
        </div>
    </div>

    <div class="section">
        <h1>Vision</h1>
        <div class="content">
            <div class="text">
                <p>
                    Our vision is to be the foremost leader in the media industry, recognized for our relentless pursuit of excellence, integrity, and creativity. We envision a future where our media services transcend boundaries, enriching lives, fostering understanding, and driving positive change on a global scale. By continuously pushing the boundaries of what media can achieve, we aspire to shape the future of communication, entertainment, and information dissemination.
                </p>
            </div>
        </div>
    </div>

    <div class="section">
        <h1>Values</h1>
        <div class="content">
            <div class="text">
                <p>
                    <strong>SPROBEST TEAM VALUES ARE:</strong>
                    <ul>
                        <li><strong>Integrity:</strong>We uphold the highest ethical standards in all aspects of our operations. Transparency, honesty, and accountability are fundamental to our relationships with employees, clients, partners, and the communities we serve.</li>
                        <li><strong>Innovation:</strong>We embrace innovation as the cornerstone of our success. We proactively seek new ideas, technologies, and approaches to media delivery, constantly pushing the boundaries to stay ahead in a rapidly evolving industry.</li>
                        <li><strong>Diversity and Inclusion:</strong>We celebrate diversity in all its forms and are committed to fostering an inclusive environment where everyone feels valued, respected, and empowered to contribute their unique perspectives and talents.</li>
                        <li><strong>Collaboration:</strong>We believe in the power of collaboration and teamwork. By fostering a culture of cooperation, communication, and mutual respect, we harness the collective talents of our diverse workforce to achieve our shared goals.</li>
                        <li><strong>Customer Focus:</strong>Our customers are at the heart of everything we do. We are dedicated to understanding their needs, exceeding their expectations, and delivering exceptional value through personalized, customer-centric media solutions.</li>
                        <li><strong>Social Responsibility:</strong>We recognize our responsibility to society and the planet. We are committed to making a positive impact through environmentally sustainable practices, community engagement, and support for social causes that align with our values.</li>
                        <li><strong>Continous Learning:</strong>We embrace a culture of lifelong learning and personal development. We encourage curiosity, experimentation, and ongoing education to adapt to change, seize new opportunities, and stay at the forefront of the media industry.</li>
                    </ul>
                
            </div>
        </div>
    </div>
</div> -->
