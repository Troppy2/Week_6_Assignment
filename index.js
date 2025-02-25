$(document).ready(function() {
    // Hover effect for the list items
    $("ul li").hover(
        function() {
            $(this).css("background-color", "lightblue");  // Change background on hover
        },
        function() {
            $(this).css("background-color", "lightgray");  // Change background back when hover ends
        }
    );

    // Easing effect for the image when clicked
    $("#easing-image").click(function() {
        $(this).animate(
            {
                opacity: 0  // Animate opacity to 0 (fully transparent)
            },
            1000, // Duration of 1 second
            "easeOutBounce", // Easing function for smooth transition
            function() {
                // Optional: Reset opacity back to 1 after a delay
                $(this).delay(1000).animate(
                    {
                        opacity: 1  // Reset opacity back to 1 (fully visible)
                    },
                    1000, // Duration of reset animation
                    "easeOutBounce" // Easing function for smooth transition back
                );
            }
        );
    });
});