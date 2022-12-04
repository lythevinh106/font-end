import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; // optiona
import AccountItem from '../AccountItem';
import classNames from "classnames/bind";
import styles from "./Search.module.scss"
import { Wrapper as PopperWrapper, Wrapper } from '../Popper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { faSearchengin } from '@fortawesome/free-brands-svg-icons';
import useDebounce from '../../../../hocks/useDebounce';
import axios from 'axios';
import request from '../../../../untils/request';
import { searchService } from '../../../../api-services/SearchService';
Search.propTypes = {

};
const cx = classNames.bind(styles);
function Search(props) {

    const [searchValue, setSearchValue] = useState("");

    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [Loading, setLoading] = useState(false);


    const debounced = useDebounce(searchValue, 500);

    const inputRef = useRef();


    const handleClear = () => {

        setSearchValue("");
        setSearchResult([]);
        inputRef.current.focus();

    }

    useEffect(() => {

        if (!debounced.trim()) {
            setSearchResult([]);
            return;
        }
        setLoading(true);



        const handleApi = async () => {
            setLoading(true);


            const result = await searchService(debounced)
            // console.log(result);
            setSearchResult(result.data);
            setLoading(false);
        }


        // fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(debounced)}&type=less`)
        //     .then((res) => res.json())
        //     .then((res) => {
        //         setSearchResult(res.data);
        //         setLoading(false);
        //     }

        //     ).catch(() => {
        //         setLoading(false);
        //     })

        // const handleApi = (async () => {


        //     try {
        //         const res = await request.get(`users/search`, {
        //             params: {
        //                 q: debounced,
        //                 type: "less"
        //             }
        //         })


        //         // console.log(res.data.data);
        //         setSearchResult(res.data.data);

        //         setLoading(false);



        //     } catch (error) {
        //         setLoading(false);
        //     }



        // });


        handleApi();








        // setTimeout(() => {
        //     setSearchResult([1, 2, 3]);
        // }, 1000)

    }, [debounced]);


    const handleHideResult = () => {

        setShowResult(false);
    }
    return (

        <HeadlessTippy
            onClickOutside={handleHideResult}

            interactive="true"
            visible={showResult && searchResult.length > 0}
            render={attrs => (
                <div className={cx("search-result")} tabIndex="-1" {...attrs}>
                    <PopperWrapper>

                        <h4 className='search-title'>
                            Account
                        </h4>

                        {/* cho nay nen tach thanh 1 co,poentn rieng r su dung usememo de toi uu */}
                        {searchResult.map((result) => (

                            <AccountItem key={result.id} data={result} />)

                        )}




                    </PopperWrapper>
                </div>

            )}

        >
            <div className={cx("search")}>

                <input placeholder='search video' spellCheck="false"
                    ref={inputRef}
                    value={searchValue}
                    onChange={(e) => {

                        const searchValue = e.target.value;
                        if (searchValue.startsWith(" ")) return;

                        setSearchValue(e.target.value);
                    }}
                    onFocus={() => {
                        setShowResult(true);
                    }}

                />

                {!!searchValue && (
                    <button className={cx("clear")} onClick={

                        handleClear
                    }>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}

                {Loading && (
                    <button className={cx("loading")}>
                        C
                    </button>
                )}


                <button className={cx("search-btn")}>
                    <FontAwesomeIcon icon={faSearchengin} />
                </button>
            </div>
        </HeadlessTippy >

    );
}

export default Search;