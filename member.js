function skillsMember() {
    console.log('skillsMember called');
    // Call to the server
    $.ajax({
        url: '/api/skills/member',
        type: 'GET',
        success: function(data) {
            console.log(data);
            // Render the data
            renderSkills(data);
        }
    });
}