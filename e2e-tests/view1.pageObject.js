var View1 = function () {
    this.navigateTo = function () {
        return browser.get('index.html#!/view1');
    };

    this.getParagraphText = function() {
        return element(by.css('h1')).getText();
    };

    this.getResultText = function() {
        return element(by.id('result')).getText();
    };

    this.submitForm = function() {
        element(by.css('form')).submit();
    };

    this.setInput = function(value) {
        element(by.id('numbers')).sendKeys(value);
    };
};

module.exports = View1;
