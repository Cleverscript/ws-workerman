## Websocket vs Workerman
---

### Install
---

Add package to project
```bash
composer require workerman/workerman
```

### Usage
---

Init websocket from php process
```bash
php ws/index.php start
```

If everything went well, the console will show

```bash
------------------------------------------- WORKERMAN --------------------------------------------
Workerman version:4.1.14          PHP version:8.3.1           Event-Loop:\Workerman\Events\Select
-------------------------------------------- WORKERS ---------------------------------------------
proto   user            worker          listen                      processes    status           
tcp     toorr2p         none            websocket://0.0.0.0:2346    4             [OK]            
--------------------------------------------------------------------------------------------------
```

```
Usage: php yourfile <command> [mode]
Commands: 
start           Start worker in DEBUG mode.
                Use mode -d to start in DAEMON mode.
stop            Stop worker.
                Use mode -g to stop gracefully.
restart         Restart workers.
                Use mode -d to start in DAEMON mode.
                Use mode -g to stop gracefully.
reload          Reload codes.
                Use mode -g to reload gracefully.
status          Get worker status.
                Use mode -d to show live status.
connections     Get worker connections.
```

Open web pages and move the unit, the coordinates will be synchronized on all tabs!

http://ws-workerman.local 