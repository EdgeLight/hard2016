-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2016-05-19 12:56:07
-- 服务器版本： 5.6.17
-- PHP Version: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `game`
--

-- --------------------------------------------------------

--
-- 表的结构 `question_num`
--

CREATE TABLE IF NOT EXISTS `question_num` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `wechat_id` varchar(80) NOT NULL,
  `q_sql` int(11) NOT NULL COMMENT '已经出过的题号',
  PRIMARY KEY (`id`),
  KEY `wechat_id` (`wechat_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COMMENT='为防止出重复题目所建' AUTO_INCREMENT=0 ;

-- --------------------------------------------------------

--
-- 表的结构 `step`
--

CREATE TABLE IF NOT EXISTS `step` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `wechat_id` varchar(80) NOT NULL,
  `location` varchar(2) NOT NULL COMMENT '南校：s，北校：n',
  `q_num` int(4) NOT NULL,
  `chance` int(10) NOT NULL DEFAULT '2',
  `score` int(10) NOT NULL DEFAULT '0',
  `time` timestamp NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `wechat_id_2` (`wechat_id`),
  KEY `wechat_id` (`wechat_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=0 ;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
