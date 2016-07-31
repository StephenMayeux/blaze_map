Template.postItem.helpers({
  domain: function() {
    const a = document.createElement('a');
    a.href = this.url;
    return a.hostname;
  }
});
