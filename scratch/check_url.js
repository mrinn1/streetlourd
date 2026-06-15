const url = 'https://cocbase.net/th12-legend-league-base-layout-used-by-top-players-tiny-4-2335';
fetch(url)
    .then(async res => {
        console.log('Status:', res.status, res.statusText);
        const html = await res.text();
        console.log('HTML length:', html.length);
        
        const hasClashLink = html.includes('clashofclans');
        console.log('Has "clashofclans":', hasClashLink);
        
        const fs = require('fs');
        fs.writeFileSync('scratch/check_output_working.html', html);
        console.log('Saved HTML to scratch/check_output_working.html');
        
        const matches = html.match(/link\.clashofclans\.com[^\s"']*/gi);
        console.log('Matches:', matches);
    })
    .catch(err => {
        console.error('Error:', err.message);
    });
