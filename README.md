# Requirements
* You can change the code only inside of the `.pipe` in the `AppComponent`.

# Goal

* By default the counter doesn't count and its value is 0
* The counting begins when we click the start button, 1 2 3 etc.
* The counting stops when we click the stop button, (for example on 20).
* The counting continues when we click the start button again, 21 22 23 etc.

# Extra (not required)

* A click on the start button after a click on the stop button should start from 0.

# Send result
 * Send me a message / an email with a code I need to put into the `.pipe`.

# Workflow

 we have subsciption  on page load itself, But we need to trigger it only when we click the start button. so we use RXJS buffer for this. Buffers the source Observable values until start button emits. The we chain it to the switchmap to trigger the interval until stop button triggers. 


