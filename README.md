<h1>Youtube Search Using Puppeteer </h1>

<h4>Delay represents how slow puppeteer will fill the input</h4>
<h4>Timeout represents how much Puppeteer will wait for query selector on page to appear.</h4>
<h4>Arguments marked with * are required <h4>

<table>
<tr>
<th>Command</th>
<th>Arguments</th>
<th>Description</th>
</tr>
<tr>
<td>singleSearch()</td>
<td>query(string)* | timeout(ms) | delay(ms) </td>
<td>This will return one single video object, timeout and delay are not required, default values are:
timeout = 10000ms delay = 80ms | </td>
</tr>
<tr>
<td>radio()</td>
<td>query(href)* | timeout(ms) | delay(ms) </td>
<td>This function will take the next recommended video and provide video object.</td>
</tr>
</table>

All feature requests or issues can be reported on <a href="https://github.com/CirkaN">GitHub</a>


