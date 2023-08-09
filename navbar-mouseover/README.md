<h1>Lessons learned in this project</h1>
<h2>CSS</h2>
<ol>
<li>for button to respect the margin, add <code>display:block<code> as by default,they comes in inline form,one use case is we can put them in center <code>margin:0 auto</code></li>
<li>no need of adding padding to your individual nav links as it will cause other elements also to expand.
<code>.btn-link{padding:1.2rem}</code> not recommended.
</li>
<li>
in hero-center in bigger screen we have added<code>align-items:end</code>which means push the alogn vertical directio to the end, if we do not add <code>padding-bottom:(some-value)</code>the elemenst will stay in the bottom which does not look good</li>
<li>we also have added <code>background-size:contain,height:100%</code> which means background can take 100% of the hero,but it should distort photo,so we added contain</li>
<li>Contain ensures that the entire image is visible within the element, with potential empty space around the image.
Cover scales the image to completely cover the element's content box, potentially cropping parts of the image.****</li>

<h4>Sidebar</h4>
<li>add position fixed to the <code>.sidebar-wraper{position:fixed,
visibility:hidden,
z-index:-90}</code> so that this is responsible for being visible once we clicked on the toggle btn.</li>

<li>keep all the functionality related to the links inside 'sidebar' and visibility functionality to the 'sidebar-wraper' like display mode, aligning items</li>

<li>add position relative to the sidebar so that we can have <code>.close-btn{position:absolute} to the right hand side of links</code></li>

<li>the length of list index words matters if we look closer at them, for instance, if we add few more words in 2nd list,the last index word will looks like it has margin from the right, inface id does not have, and the length caused that look to that element.</li>
<li><strong>Theer is no better friend than the developer tools.</strong></li>
</ol>

<h2>JavaScript</h2>
<hr>
<ol>
<li>while adding the links inside data.ja,keep in mind that you are sending that data to the <code>app.js</code> and from this file,you are going get access to the links, so keep the address as you are accessing the links from <code>app.js</code> not the <code>data.js</code></li>
<li><code>  const text = e.currentTarget.textContent;</code> we are using this to get the text inside the current target which is a button and we are looking for the text</li>
<li><code>const tempPage = sublinks.find(({ page }) => page === text);</code> 'find' method returns an object if exist, or undefined if the object does not exist.</li>
<li>here, we say while mouse moving on the elements, if the text inside the button === the page property inside the 'data.js' then shows us the sub</li>
<li>we use the 'tempPage' which has properties of {page,links}</li>
<li><code> if (tempPage) </code>,if tempPage exists, then change the context of the 'Submenu' to the page and its elements.</li>
<li><code>if (!e.target.classList.contains("btn-link"))<code> if the elemnets in the navbar we are hovering does not have class of 'btn-link',then remove the 'show' class from it.</li>
</ol>
