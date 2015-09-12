#!/usr/bin/env bash

# define build directories
BUNDLES_DIR=desktop.bundles

MERGED_DIR=merged

BUILD_DIR=${BUNDLES_DIR}/${MERGED_DIR}/public_html

CSS_DIR=styles
JS_DIR=scripts

# clear cache
rm -rf ${BUILD_DIR};

# create build dir
mkdir -p ${BUILD_DIR};
mkdir -p ${BUILD_DIR}/${JS_DIR};
mkdir -p ${BUILD_DIR}/${CSS_DIR};
cp -r ${BUNDLES_DIR}/${MERGED_DIR}/img ${BUILD_DIR}/img

# collect `html` files,
# replace `css` and `js` links and
# copy them to build directory
ls ${BUNDLES_DIR} | while read line; do

    if [ "${line}" != "${MERGED_DIR}" ]
    then
        echo build ${line}.html;
        # replace `css` and `js` links and copy them to build directory
        cat ${BUNDLES_DIR}/${line}/${line}.html | \
        sed -e "s!/${BUNDLES_DIR}/merged/merged.min.js!/${JS_DIR}/merged.min.js!g" | \
        sed -e "s!/${BUNDLES_DIR}/merged/merged.min.css!/${CSS_DIR}/merged.min.css!g" > \
        ${BUILD_DIR}/${line}.html;

    else
        echo build css and js;
        # copy js
        cp ${BUNDLES_DIR}/${MERGED_DIR}/merged.min.js ${BUILD_DIR}/${JS_DIR}/merged.min.js

        # copy css
        cat ${BUNDLES_DIR}/${MERGED_DIR}/merged.min.css | \
        sed -e "s!/${BUNDLES_DIR}/${MERGED_DIR}/img/!/img/!g"  > \
        ${BUILD_DIR}/${CSS_DIR}/merged.min.css;
    fi;
done;
