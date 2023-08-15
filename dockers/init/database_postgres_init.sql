--
-- PostgreSQL database dump
--

-- Dumped from database version 15.3 (Debian 15.3-1.pgdg120+1)
-- Dumped by pg_dump version 15.3

-- Started on 2023-08-09 10:14:55 UTC

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
-- TOC entry 215 (class 1259 OID 16390)
-- Name: user; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public."user" (
    id integer NOT NULL,
    name character(100) NOT NULL,
    status character(100)
);


ALTER TABLE public."user" OWNER TO root;

--
-- TOC entry 214 (class 1259 OID 16389)
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
-- TOC entry 3344 (class 0 OID 16390)
-- Dependencies: 215
-- Data for Name: user; Type: TABLE DATA; Schema: public; Owner: root
--

COPY public."user" (id, name, status) FROM stdin;
1	Bobbi Ashley                                                                                                                                                                                                                                                   	Active
2	Sherrie Ashley                                                                                                                                                                                                                                                 	Active
3	Lela Rosario                                                                                                                                                                                                                                                   	Inactive
4	Jamal Kirk                                                                                                                                                                                                                                                     	Active
5	Garry Suarez                                                                                                                                                                                                                                                   	Inactive
6	Lyman Weber                                                                                                                                                                                                                                                    	Active
7	Frieda Mooney                                                                                                                                                                                                                                                  	Active
8	Norman Hunt                                                                                                                                                                                                                                                    	Inactive
9	Lou Krueger                                                                                                                                                                                                                                                    	Active
10	Dolores Mathews                                                                                                                                                                                                                                                	Active
\.


--
-- TOC entry 3350 (class 0 OID 0)
-- Dependencies: 214
-- Name: user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('public.user_id_seq', 10, true);


--
-- TOC entry 3200 (class 2606 OID 16394)
-- Name: user user_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_pkey PRIMARY KEY (id);


-- Completed on 2023-08-09 10:14:55 UTC

--
-- PostgreSQL database dump complete
--

