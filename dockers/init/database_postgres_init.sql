PGDMP         3                {            example    15.3 (Debian 15.3-1.pgdg120+1)    15.3                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    16384    example    DATABASE     r   CREATE DATABASE example WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'en_US.utf8';
    DROP DATABASE example;
                root    false            �            1259    16396    cargo    TABLE     �   CREATE TABLE public.cargo (
    id bigint NOT NULL,
    name character(15) NOT NULL,
    type character(10) NOT NULL,
    min numeric NOT NULL,
    max numeric NOT NULL
);
    DROP TABLE public.cargo;
       public         heap    root    false            �            1259    16395    cago_id_seq    SEQUENCE     �   ALTER TABLE public.cargo ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.cago_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          root    false    217            �            1259    16385    user    TABLE     u   CREATE TABLE public."user" (
    id integer NOT NULL,
    name character(100) NOT NULL,
    status character(100)
);
    DROP TABLE public."user";
       public         heap    root    false            �            1259    16388    user_id_seq    SEQUENCE     �   ALTER TABLE public."user" ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.user_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          root    false    214                      0    16396    cargo 
   TABLE DATA           9   COPY public.cargo (id, name, type, min, max) FROM stdin;
    public          root    false    217   e                 0    16385    user 
   TABLE DATA           2   COPY public."user" (id, name, status) FROM stdin;
    public          root    false    214                      0    0    cago_id_seq    SEQUENCE SET     9   SELECT pg_catalog.setval('public.cago_id_seq', 4, true);
          public          root    false    216            !           0    0    user_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.user_id_seq', 10, true);
          public          root    false    215            �           2606    16402    cargo cago_pkey 
   CONSTRAINT     M   ALTER TABLE ONLY public.cargo
    ADD CONSTRAINT cago_pkey PRIMARY KEY (id);
 9   ALTER TABLE ONLY public.cargo DROP CONSTRAINT cago_pkey;
       public            root    false    217            �           2606    16390    user user_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public."user" DROP CONSTRAINT user_pkey;
       public            root    false    214               �   x�}�=
A�:9EN ��u���Q���t+�f��m�Q�I#�R$/��X�"�яē�0��17�a���򤙻���kSǰ���yGlkX
,Hm%���Qgӝ�Fܙ��m��I���Ճɿ�?�/�$��-g��M�         �   x�ՔK
�PE�y��
��g����t��I��>lH[��^�5�Y@�{�,$M=Ϋ,����?�j�o\��z6�	�2��sT�^�0�-���aG�y��a��2�5��xlH�e�	��ⶠO���a��2���𯄉Hi��¸La/�fӔ�&L�fK��6|�������\�+L���Y�p�Ȝ;ι7 }.Q     