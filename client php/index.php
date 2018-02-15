
<html>
    <head>
        <meta charset="UTF-8">
        <title>chat Node JS</title>
        <script src="https://code.jquery.com/jquery-1.11.1.js"></script>
        <script src="modules/socket.io/node_modules/socket.io-client/dist/socket.io.js"></script>
        <script src="chat.js?n=1"></script>
        <style>
                * { margin: 0; padding: 0; box-sizing: border-box; }
                body { font: 13px Helvetica, Arial; }
                form { background: #000; padding: 3px; position: fixed; bottom: 0; width: 100%; }
                form input { border: 0; padding: 10px; width: 90%; margin-right: .5%; }
                form button { width: 9%; background: rgb(130, 224, 255); border: none; padding: 10px; }
                #messages { list-style-type: none; margin: 0; padding: 0; }
                #messages li { padding: 5px 10px; }
        </style>
       
        <script>
           
        </script>
    </head>
    <body>
        <ul id="messages"></ul>
        <form action="">
            <input id="u" autocomplete="off" />
            <input id="m" autocomplete="off" /><button>Send</button>
        </form>
    </body>
</html>
