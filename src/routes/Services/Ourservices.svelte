<div class="container">
    <div class="services">
        <h1>OUR SERVICES</h1>
        <h3>Corporate Events</h3>
        <ul>
            <li>Corporate Videography and Photography</li>
            <li>Live Streaming and Video Conferencing of online Corporate events and meetings</li>
            <li>Organizing Corporate Virtual</li>
        </ul>
    </div>
    <div class="images left-images">
        <img src="image 1" alt="Image 1">
        <img src="image 2" alt="Image 2">
        <img src="image 3" alt="Image 3">
    </div>
    <div class="images right-images">
        <img src="image 4" alt="Image 4">
        <img src="image 5" alt="Image 5">
        <img src="image 6" alt="Image 6">
    </div>
</div>
<style>
    .container {
        text-align: center;
        margin-top: 50px;
        position: relative;
    }

    .services {
        border: 2px solid #ccc;
        border-radius: 10px;
        padding: 20px;
        width: 60%; 
        margin: 0 auto; 
        background-color: #f9f9f9;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        position: relative;
        z-index: 1;
        display: inline-block;
        vertical-align: top;
    }

    .services h1 {
        margin: 0;
        color: #333;
        font-size: 24px;
        text-transform: uppercase;
        padding-bottom: 10px;
        border-bottom: 2px solid #ccc;
    }

    .services h3 {
        margin: 0;
        color: #555;
        font-size: 18px;
        font-weight: bold;
        margin-top: 20px;
    }

    .services ul {
        list-style-type: disc;
        padding-left: 20px;
        margin-top: 10px;
    }

    .images {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 20%; 
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .images img {
        width: 100px;
        height: 100px;
        border-radius: 5px;
        margin-bottom: 10px;
    }

    .left-images {
        left: -30%; 
    }

    .right-images {
        right: -30%; 
    }
</style>


