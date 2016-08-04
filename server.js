const  express = require('express');
const http = require('http');
const path = require('path');
const fs = require('fs');
const horizon = require('@horizon/server');

const  app = express();

// Serve our static stuff like css
app.use(express.static(path.join(__dirname, 'dist')));

// Send all requests to index.html
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
})

const  PORT = 8182;

const server = http.createServer(app);

server.listen(PORT, function() {
  console.log('Express server running at localhost:' + PORT);
});

const horizon_server = horizon(server, {
	  project_name: 'react_horizon',
    auth: {
      allow_anonymous: true,
      token_secret:  'kMyBR+9441D++TNNtPHnlWPBcznxnofU7MQmPedOvlmUC3KbvseNwnKnPAb17j/uQ3nYz2EGdOFjrfBQ2wUBYQ=='
  	}
  });

// Add Github authentication
// horizon_server.add_auth_provider(horizon.auth.github);
