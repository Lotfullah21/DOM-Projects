<h3>setInterval(callback,delay)</h3>

<p>setInterval is a function commonly used in JavaScript for scheduling the repeated execution of a given function at a specific time interval. It's a method to create intervals (repeated execution) and is often used for implementing timers or executing actions periodically</p>

<p>It's essential to keep in mind that setInterval continues to execute the function at the specified interval until you explicitly call clearInterval to stop it. To stop the interval, you need to store the return value of setInterval in a variable and then pass that variable to clearInterval when you want to stop it:</p>
