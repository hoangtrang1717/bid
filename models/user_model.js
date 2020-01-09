const db = require("../utils/queries");

module.exports = {
  all: _ => db.load('SELECT * FROM public."USER"'),
  // add: entity => db.add(entity, "USER"),
  getByUserName: async username => {
    const rows = await db.detail(
      'SELECT * FROM public."USER" WHERE "USER_NAME" = $1',
      username
    );
    if (rows.length > 0) return rows[0];
    return null;
  },
  getSinglePro: id =>
    db.detail('select * from public."PRODUCT" where "PRO_ID" = $1', id),
  // getLikes: userID =>
  //   db.load(`
  //   SELECT P.PRO_NAME, P.IMG1, U.name, P.UploadDate, P.DaysLeft, P.CurrentPrice, P.Threshold, P.Id, P.SellerID
  //   FROM PRODUCT P
  //   JOIN Likes L ON P.Id = L.ProId
  //   JOIN USER U ON P.SellerID = U.id
  //   WHERE L.UserId = ${userID}`),
  getbids: userID =>
    db.detail(
      'SELECT * FROM public."BID_HISTORY" WHERE "USER_ID" = $1',
      userID
    ),
  getSelling: userID =>
    db.detail(
      'select P.* from public."PRODUCT" AS P, public."WINLIST" AS W WHERE P."SELLER_ID" = $1 AND P."PRO_ID" != W."PRO_ID"',
      userID
    ),
  getSold: userID =>
    db.detail(
      'select P.* from public."PRODUCT" AS P, public."WINLIST" AS W WHERE P."SELLER_ID" = $1 AND P."PRO_ID" = W."PRO_ID"',
      userID
    ),
  getBought: userID =>
    db.detail(
      'select P.* from public."WINLIST" as S, public."PRODUCT" AS P where S."USER_ID" = $1 AND S."PRO_ID" = P."PRO_ID"',
      userID
    ),
  // uploadProduct: entity => db.add(entity, "PRODUCT"),
  // getIdWithImage: link => db.load(`select Id from Product where ProductName = '${link}'`),
  // addImage: temp => db.add(temp, 'Images'),
  getWinnerWithProID: id =>
    db.load(
      'select U.* from public."WINLIST" as S, public."USER" AS U where S."PRO_ID" = $1 AND S."USER_ID" = U."USER_ID"',
      id
    ),
  // addReview: rev => db.add(rev, "USER_REVIEW"),
  getReviewsWithID: id =>
    db.detail('select * from PUBLIC."USER_REVIEW" where "USER_ID" = $1', id)
};