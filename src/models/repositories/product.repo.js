'use strict'

const { product, electronic, clothing, furniture } = require ('../../models/product.model');
const { Types } =  require ('mongoose');

const findAllDraftsForShop = async({query, limit, skip}) => {
    return await queryProduct({query, limit, skip}) //k cần cái này cũng được, vì exec đại diện cho cụm từ sử dụng async await trong promise của mongoose
}

const findAllPublishForShop = async({query, limit, skip}) => {
    return await queryProduct({query, limit, skip})  //k cần cái này cũng được, vì exec đại diện cho cụm từ sử dụng async await trong promise của mongoose
}


const searchProductByUser = async( {keySearch} ) => {
    const regexSearch =  new RegExp( keySearch );
    const result = await product.find({
            isPublished: true,
            $text: { $search: regexSearch }
        },{
            score: { $meta: 'textScore' }
        })
        .sort({ score: { $meta: 'textScore' } })
        .lean()
    return result
}


const publishProductByShop =  async ({product_shop, product_id}) => {
    const updatedProduct = await product.findOneAndUpdate({
        product_shop: new Types.ObjectId(product_shop),
        _id: new Types.ObjectId(product_id),
    },
    {
        $set: { isDraft: false, isPublished: true }
    },
    // { new: true }
    );

    if (!updatedProduct) {
        console.log('No product found to update');
        return null;
    }

    console.log("Updated Product:", updatedProduct);
    return updatedProduct;
}


const unPublishProductByShop =  async ({product_shop, product_id}) => {
    const updatedProduct = await product.findOneAndUpdate({
        product_shop: new Types.ObjectId(product_shop),
        _id: new Types.ObjectId(product_id),
    },
    {
        $set: { isDraft: true, isPublished: false }
    },
    // { new: true }
    );

    if (!updatedProduct) {
        console.log('No product found to update');
        return null;
    }

    console.log("Updated Product:", updatedProduct);
    return updatedProduct;
}





const queryProduct =  async({query, limit, skip}) => {
    return await product.find(query)
    .populate('product_shop', 'name email -_id')
    .sort({ updateAt: -1 }) //lấy thằng mới nhất
    .skip(skip)
    .limit(limit)
    .lean()
    .exec() //k cần cái này cũng được, vì exec đại diện cho cụm từ sử dụng async await trong promise của mongoose
}

module.exports = {
    findAllDraftsForShop,
    publishProductByShop,
    findAllPublishForShop,
    unPublishProductByShop,
    searchProductByUser
}