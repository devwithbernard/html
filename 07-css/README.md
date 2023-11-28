# HTML Styles - CSS
<hr/>
<p>CSS stands for <strong>C</strong>ascading <strong>S</strong>tyle <strong>S</strong>heets.</p>
<p>Css saves a lot of work. It can control the layout of multiple web pages all at once.</p>

## What is CSS ?
<hr/>
<p>Cascading Style Sheets (CSS) is used to format the layout of a webpage.</p>
<div style="margin-top: 2rem">
    <p>With CSS, you can control the <strong>Color</strong>, the <strong>Size of text</strong>, the 
<strong>Spacing between elements</strong>, how elements are <strong>positioned</strong> and <strong>laid 
out</strong>, what <strong>background images</strong> or <strong>background colors </strong> are to be used, 
different displays for different devices and screen sizes, and much more!</p>
</div>

<div style="color: red; background-color: antiquewhite; padding: 5px 15px; margin-top: 35px">
    <strong>Tip:</strong>
    <span>
        The word <strong>cascading</strong> means that a style applied to a parent element will also apply to all 
children elements with the parent. So, if you set the color of the body text to "blue", all headings, paragraphs, 
and other text elements within the body will also get the same color (useless you specify something else)!
    </span>
</div>

## Using CSS
<hr/>
<p>CSS can be added to HTML documents in 3 ways:</p>
<ul style="margin-left: 35px">
    <li>
        <strong>Inline</strong>
        <span>- by using <span style="color: red">style</span> attribute inside HTML elements</span>
    </li>
    <li>
        <strong>Internal</strong>
        <span>- by using <span style="color: red">&lt;style&gt;</span> element in the <span style="color: 
        red">&lt;head&gt;</span> section</span>
    </li>
    <li>
        <strong>External</strong>
        <span>- by using <span style="color: red">&lt;link&gt;</span> element to link to an external CSS file</span>
    </li>
</ul>
<div>
    <strong>Tip:</strong>
    <span>The most common way to add CSS, is to keep the styles in external CSS files.</span>
</div>