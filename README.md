# Latest-Books-Widget-for-BookStack
This code show the latest books under a shelf id . You can use as @include or offer a widget for people to add to their site

## How to Use it

the js file must be placed in public/dist folder if you want to use as an external widget an included in external sites like this 


<pre><code><script type="text/javascript" src="https://yousite.com/dist/widgets/five.js"></script>
<div><h3>Latest Books under </h3><h4 id="shelf-name"></h4><div id="bookshelf-container"><!-- Books will be loaded here --> </div></div></code></pre>


to use in your own site you can include the same way or create a blade and add th code and use the @include method 

this code is taking books from shelf id 5, you can change that and you can duplicaye and rename the file to have the latest books from several shelfs. 
