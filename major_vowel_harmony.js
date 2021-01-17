const isHasMajorVowelHarmony= (word)=>{

    const hardVowels=['a','ı','o','u'];
    const softVowels=['e','i','ö','ü'];
    let soft=false, hard=false;

    const wordArray=word.split("");

    wordArray.map(value=>{
        if(hardVowels.includes(value)){
            hard=true;
        }
        if(softVowels.includes(value)){
            soft=true
        }
    });

    return !(soft && hard)
};


export default isHasMajorVowelHarmony;
