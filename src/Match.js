class Photo {
    constructor(url, caption, location) {
        this.url = url;
        this.caption = caption;
        this.location = location;
    }
}

class Prompt {
    constructor(question, answer) {
        this.question = question;
        this.answer = answer;
    }
}

export default class Match {
    constructor(matchData) {
        this.block = null;
        this.like = null;
        this.comment = null;
        this.photo = null;
        this.prompt = null;
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
            console.log(likeContent);
            if ('photo' in likeContent && likeContent['photo']['url']) {
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
            if (weMetInfo['did_meet_subect'] === 'Yes') {
                this.weMet = weMetInfo['timestamp'];
            }
            if ('was_my_type' in weMetInfo) {
                this.myType = weMetInfo['was_my_type'];
            }
        }
    }
}
