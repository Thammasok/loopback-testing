--
-- PostgreSQL database dump
--

-- Dumped from database version 15.3 (Debian 15.3-1.pgdg120+1)
-- Dumped by pg_dump version 15.3

-- Started on 2023-08-18 01:04:16 UTC

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 216 (class 1259 OID 16399)
-- Name: cargo; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public.cargo (
    name character(15) NOT NULL,
    type character(10) NOT NULL,
    min numeric NOT NULL,
    max numeric NOT NULL,
    id bigint NOT NULL
);


ALTER TABLE public.cargo OWNER TO root;

--
-- TOC entry 217 (class 1259 OID 16419)
-- Name: cargo-config_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

ALTER TABLE public.cargo ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."cargo-config_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 214 (class 1259 OID 16385)
-- Name: user; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public."user" (
    id integer NOT NULL,
    name character(100) NOT NULL,
    status character(100)
);


ALTER TABLE public."user" OWNER TO root;

--
-- TOC entry 215 (class 1259 OID 16388)
-- Name: user_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

ALTER TABLE public."user" ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.user_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 3352 (class 0 OID 16399)
-- Dependencies: 216
-- Data for Name: cargo; Type: TABLE DATA; Schema: public; Owner: root
--

COPY public.cargo (name, type, min, max, id) FROM stdin;
กระบะ ตอนครึ่ง 	รถกระบะ   	10000	25000	1
กระบะ ตอนเดียว 	รถกระบะ   	15000	30000	2
บรรทุก 6 ล้อ   	บรรทุก    	33000	50000	3
บรรทุก 10 ล้อ  	บรรทุก    	50000	70000	4
\.


--
-- TOC entry 3350 (class 0 OID 16385)
-- Dependencies: 214
-- Data for Name: user; Type: TABLE DATA; Schema: public; Owner: root
--

COPY public."user" (id, name, status) FROM stdin;
1	Bobbi Ashley                                                                                        	Active                                                                                              
2	Sherrie Ashley                                                                                      	Active                                                                                              
3	Lela Rosario                                                                                        	Inactive                                                                                            
4	Jamal Kirk                                                                                          	Active                                                                                              
5	Garry Suarez                                                                                        	Inactive                                                                                            
6	Lyman Weber                                                                                         	Active                                                                                              
7	Frieda Mooney                                                                                       	Active                                                                                              
8	Norman Hunt                                                                                         	Inactive                                                                                            
9	Lou Krueger                                                                                         	Active                                                                                              
10	Dolores Mathews                                                                                     	Active                                                                                              
\.


--
-- TOC entry 3359 (class 0 OID 0)
-- Dependencies: 217
-- Name: cargo-config_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('public."cargo-config_id_seq"', 4, true);


--
-- TOC entry 3360 (class 0 OID 0)
-- Dependencies: 215
-- Name: user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('public.user_id_seq', 10, true);


--
-- TOC entry 3207 (class 2606 OID 16426)
-- Name: cargo cargo-config_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.cargo
    ADD CONSTRAINT "cargo-config_pkey" PRIMARY KEY (id);


--
-- TOC entry 3205 (class 2606 OID 16390)
-- Name: user user_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_pkey PRIMARY KEY (id);


-- Completed on 2023-08-18 01:04:16 UTC

--
-- PostgreSQL database dump complete
--

