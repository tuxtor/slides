function printText(text: string[]|string) {
    if (typeof text === 'string') {
        console.log(text.trim());
    } else {
        console.log(text.join(' '));
    }
}

printText('   JavaScript   ');
printText(['Scala', 'Java']);
