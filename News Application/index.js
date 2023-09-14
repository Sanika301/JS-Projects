const apikey='251e088117b24f7c9fbc1b574899aa18';
const url="https://newsapi.org/v2/everything?q=";

window.addEventListener('load',fetchNews("India"));
async function fetchNews(query){
    const res=await fetch(`${url}${query}&apiKey=${apikey}`);
    const data=await res.json();
    binddata(data.articles);
    // console.log(arr[0]);
}
function binddata(articles){
    const cardsContainer=document.getElementById('cards-container');
    const newsCardTemplate=document.getElementById('news-template-card');
    cardsContainer.innerHTML="";
    articles.forEach((article) => {
        if(!article.urlToImage)
        return;
        const cardClone=newsCardTemplate.content.cloneNode(true);
        fillDataInCard(cardClone,article);
        cardsContainer.appendChild(cardClone);
    })
}

function fillDataInCard(cardClone,article){
    const img=cardClone.querySelector("#news-img");
    const title=cardClone.querySelector('#title');
    const source=cardClone.querySelector('#source');
    const description=cardClone.querySelector('#description');
    img.src = article.urlToImage;
    title.innerHTML=article.title;
    description.innerHTML=article.description;
    const date=new Date(article.publishedAt).toLocaleString('en-US',{
        timeZone:"Asia/Jakarta",
    });
    source.innerHTML=`${article.source.name} ${date}`;
    cardClone.firstElementChild.addEventListener('click',()=>{
        window.open(article.url,"_blank");
    });
}
let currentSelectorItem=null;
function searchItem(item){
    fetchNews(item);
    const option=document.getElementById(item);
    currentSelectorItem?.classList.remove('active');
    currentSelectorItem=option;
    currentSelectorItem.classList.add('active');
}
function btnclicked(){
    let searchbar=document.getElementById("search-bar");
    const query=searchbar.value;
    if(!query)
    return;
    fetchNews(query);
    searchbar.value="";
    currentSelectorItem?.classList.remove('active');
    currentSelectorItem=null;
}