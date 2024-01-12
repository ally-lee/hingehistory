class Photo {
    constructor(url, caption, location) {
        this.url = url;
        this.caption = caption;
        this.location = location;
    }
}

class Video {
    constructor(url, caption, location) {
        this.url = url;
        this.caption = caption;
        this.location = location;
    }
}

class VoicePrompt {
    constructor(question, url) {
        this.question = question;
        this.url = url;
    }
}

class Prompt {
    constructor(question, answer) {
        this.question = question;
        this.answer = answer;
    }
}

class PromptPoll {
    constructor(options, selectedOptionIndex) {
        this.options = options;
        this.selectedOptionIndex = selectedOptionIndex;
    }
}

export default class Match {
    constructor(matchData) {
        this.block = null;
        this.like = null;
        this.comment = null;
        this.photo = null;
        this.video = null;
        this.videoPrompt = null;
        this.prompt = null;
        this.promptPoll = null;
        this.match = null;
        this.messageCount = 0;
        this.weMet = null;
        this.myType = null;

        if ('block' in matchData) {
            this.block = matchData['block'][0]['timestamp'];
        }
        if ('like' in matchData) {
            this.like = matchData['like'][0]['like'][0]['timestamp'];
            if ('comment' in matchData['like'][0]['like'][0] &&
            matchData['like'][0]['like'][0]['comment']) {
                this.comment = matchData['like'][0]['like'][0]['comment'];
            }
            const likeContent = JSON.parse(matchData['like'][0]['content'])[0];

            if ('promptPoll' in likeContent && likeContent['promptPoll']['questionId']) {
                let selectedOptionIndex = likeContent['promptPoll']['selectedOptionIndex'];
                if (typeof(selectedOptionIndex) != 'number') {
                    selectedOptionIndex = selectedOptionIndex['int'];
                }
                this.promptPoll = new PromptPoll(likeContent['promptPoll']['options'], selectedOptionIndex);
            } else if ('voicePrompt' in likeContent && likeContent['voicePrompt']['question']) {
                this.voicePrompt = new VoicePrompt(likeContent['voicePrompt']['question'], likeContent['voicePrompt']['url']);
            } else if ('videoPrompt' in likeContent && likeContent['videoPrompt']['videoUrl']) {
                this.video = new Video(likeContent['videoPrompt']['videoUrl'], '', '');
            } else if ('video' in likeContent && likeContent['video']['url']) {
                this.video = new Video(
                    likeContent['video']['url'],
                    likeContent['video']['caption'],
                    likeContent['video']['location']
                );
            } else if ('photo' in likeContent && likeContent['photo']['url']) {
                this.photo = new Photo(
                    likeContent['photo']['url'],
                    likeContent['photo']['caption'],
                    likeContent['photo']['location']
                );
            } else if ('prompt' in likeContent && 'question' in likeContent['prompt']) {
                this.prompt = new Prompt(
                    likeContent['prompt']['question'],
                    likeContent['prompt']['answer']
                );
            }
        }
        if ('match' in matchData) {
            this.match = matchData['match'][0]['timestamp'];
        }
        if ('chats' in matchData) {
            this.messageCount = matchData['chats'].length;
        }
        if ('we_met' in matchData) {
            const weMetInfo = matchData['we_met'][matchData['we_met'].length - 1];
            this.weMet = weMetInfo['did_meet_subject'];
            if ('was_my_type' in weMetInfo) {
                this.myType = weMetInfo['was_my_type'];
            }
        }
    }
}
