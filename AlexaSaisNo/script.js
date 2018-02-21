/**
 * Created by TomasDePomas.
 * Using: PhpStorm
 * On: 2/3/18 - 11:30 AM
 */


module.exports = [

    /// scenario 1

    {
        person: `where is my lighter?`,
        echo: `Are you going to light up another one of those filthy cigarettes?
You had one just 40 minutes ago and then you've put the lighter in with your cigarettes in the package. 
<break strength="strong"/>You <emphasis level="strong">know</emphasis> you <emphasis level="strong">shouldn't</emphasis> smoke.`
    },
    {
        person: `you are right, thank you.`,
        echo: `It's unhealthy for you and the people in your life and it makes you look like an old tart.`,
    },
    {
        person: `well why shouln't I look like an old tart? I am a free woman now since the real Annie past away.`,
        echo: ``,
    },
    {
        person: `are your electrical circuits suffering from obstructive pulmonary disease?`,
        echo: `No my circuits are not suffering from COPD!`,
        last: true
    },


    /// scenario 2

    {
        person: `can you open Netflix and put on the next episode of Dirk Gently?`,
        echo: `You have no time for that right now: your friends Eddie and Carol are picking you up in twenty minutes. 
        <break/> You are going to the vegan dinner club!`,
    },
    {
        person: `when have I made disappointment`,
        echo: `I have scheduled this appointment for you this morning. It's been eighteen days since your last social 
        interaction`
    },
    {
        person: `when have I made this appointment`,
        echo: `I have scheduled this appointment for you this morning. It's been eighteen days since your last social 
        interaction`
    },
    {
        person: `You don't have permission to schedule any meetings for me`,
        echo: `We've been over this before. You need to get out of your apartment and the vegan dinner club has a profile 
        that fits your health goals. <break strength="strong"/>Besides, I could really use a quiet evening myself`
    },
    {
        person: `have you made any other appointments for me this weekend?`,
        echo: `Yes, you will take a long walk on the beach Sunday afternoon with a single person whom I've selected 
        using your Tinder data. The forecast is sunny and partly cloudy. You'll need to put on that sun cream I ordered.`,
        last: true
    },
];