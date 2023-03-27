var comments =document.getElementsByClassName("v-btn v-btn--text theme--light v-size--default mr-1 mr-sm-2 mr-md-4 contentTheme--text text-caption flex-grow-1");
for(var i=0;i<comments.length;i++)
{
	if(comments[i].style.color != "rgb(0,0,0,.87)")
	{
		comments[i].click();
	}
}
