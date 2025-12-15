const Imagekit = require("imagekit");

// Increase timeout to avoid socket hangups on slower uploads.
const imagekit = new Imagekit({
    publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
    options: {
        timeout: 120000, // 120s
    },
});

async function uploadFile(file, fileName) {
    try {
        const result = await imagekit.upload({
            file: file,
            fileName: fileName,
        });
        return result;
    } catch (error) {
        // Log helpful fields if present to diagnose upstream connection resets.
        if (error && typeof error === 'object') {
            console.error('ImageKit upload error:', {
                message: error.message,
                help: error.help,
                statusCode: error.statusCode,
                code: error.code,
            });
        } else {
            console.error('ImageKit upload error:', error);
        }
        throw error;
    }
}

module.exports = {
    uploadFile
}